/* eslint-disable prettier/prettier */
import Slider from '@react-native-community/slider';
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TrackPlayer, {Capability, State} from 'react-native-track-player';
import {colors} from '../constent/Colors';
import {playlist} from '../constent/Data';
import image from '../constent/Images';
import Header from './Home/Header';

const Music = ({route}) => {
  const {id} = route.params.item;
  const ref = useRef();
  const [currentTrackId, setCurrentTrackId] = useState(id);
  const [playerInitialized, setPlayerInitialized] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [trackPosition, setTrackPosition] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    const scrollToCurrentSong = () => {
      ref.current.scrollToIndex({animated: true, index: 0});
    };

    const setUpPlayer = async () => {
      if (playerInitialized) return;

      try {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.updateOptions({
          capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.Stop,
          ],
          compactCapabilities: [Capability.Play, Capability.Pause],
        });
        await TrackPlayer.add(playlist);
        setPlayerInitialized(true);
      } catch (error) {
        console.error('Error setting up the player', error);
      }
    };

    setUpPlayer();
    scrollToCurrentSong();
  }, [playerInitialized, currentTrackId]);

  useEffect(() => {
    const updatePlaybackState = async () => {
      try {
        const state = await TrackPlayer.getState();
        setIsPlaying(state === State.Playing);
        const currentTrackId = await TrackPlayer.getCurrentTrack();
        setCurrentTrack(currentTrackId);
      } catch (error) {
        console.error('Error getting playback state', error);
      }
    };

    updatePlaybackState();
  }, [currentTrack]);

  const togglePlayPause = async () => {
    try {
      if (currentTrack !== currentTrackId) {
        await TrackPlayer.skip(currentTrackId);
        setCurrentTrack(currentTrackId);
      }

      if (isPlaying) {
        await TrackPlayer.pause();
      } else {
        await TrackPlayer.play();
      }

      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Error toggling play/pause', error);
    }
  };

  const playNext = async () => {
    try {
      let newPosition =
        playlist.findIndex(track => track.id === currentTrackId) + 1;
      if (newPosition >= playlist.length) {
        newPosition = 0;
      }
      setCurrentTrackId(playlist[newPosition].id);
      await TrackPlayer.skip(playlist[newPosition].id);
    } catch (error) {
      console.error('Error skipping to next track', error);
    }
  };

  const playPrevious = async () => {
    try {
      let newPosition =
        playlist.findIndex(track => track.id === currentTrackId) - 1;
      if (newPosition < 0) {
        newPosition = playlist.length - 1;
      }
      setCurrentTrackId(playlist[newPosition].id);
      await TrackPlayer.skip(playlist[newPosition].id);
    } catch (error) {
      console.error('Error skipping to previous track', error);
    }
  };

  const toggleRepeat = () => {
    const newRepeat = !repeat;
    setRepeat(newRepeat);
    TrackPlayer.setRepeatMode(
      newRepeat ? TrackPlayer.REPEAT_MODE_TRACK : TrackPlayer.REPEAT_MODE_OFF,
    );
  };

  const toggleShuffle = () => {
    const newShuffle = !shuffle;
    setShuffle(newShuffle);
    if (newShuffle) {
      const shuffledPlaylist = [...playlist];
      for (let i = shuffledPlaylist.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledPlaylist[i], shuffledPlaylist[j]] = [
          shuffledPlaylist[j],
          shuffledPlaylist[i],
        ];
      }
      TrackPlayer.reset();
      TrackPlayer.add(shuffledPlaylist);
      TrackPlayer.skip(currentTrackId);
    } else {
      TrackPlayer.reset();
      TrackPlayer.add(playlist);
      TrackPlayer.skip(currentTrackId);
    }
  };

  const onSliderValueChange = async value => {
    setTrackPosition(value);
    try {
      const duration = await TrackPlayer.getDuration();
      await TrackPlayer.seekTo(value * duration);
    } catch (error) {
      console.error('Error seeking track', error);
    }
  };

  const renderItem = ({item}) => (
    <View>
      <TouchableOpacity>
        <Image source={{uri: item.artwork}} style={styles.banner} />
      </TouchableOpacity>
      <View style={styles.musicInfo}>
        <View>
          <Text style={styles.songName}>{item.title}</Text>
          <Text style={styles.songArtist}>{item.artist}</Text>
        </View>
        <TouchableOpacity>
          <Image source={image.HEART_ICON} style={styles.like} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const currentSong = playlist.filter(track => track.id === currentTrackId);

  return (
    <>
      <Header title={'Now playing'} />
      <View style={styles.container}>
        <View style={styles.content}>
          <FlatList
            ref={ref}
            horizontal
            pagingEnabled
            data={currentSong}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />

          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1}
            thumbTintColor={colors.primaryColor}
            minimumTrackTintColor={colors.white}
            maximumTrackTintColor={colors.fontColor}
            value={trackPosition}
            onSlidingComplete={onSliderValueChange}
          />

          <View style={styles.btns}>
            <TouchableOpacity onPress={toggleRepeat}>
              <Image
                source={image.REPEATE_BTN}
                style={[
                  styles.playIcon,
                  repeat && {tintColor: colors.primaryColor},
                ]}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={playPrevious}>
              <Image source={image.PREVIOUS_BTN} style={styles.playIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainBtn} onPress={togglePlayPause}>
              <Image
                source={isPlaying ? image.PAUSE_BTN : image.PLAY_BTN}
                style={styles.playbtn}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={playNext}>
              <Image source={image.NEXT_BTN} style={styles.playIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleShuffle}>
              <Image
                source={image.SHUFFLE_BTN}
                style={[
                  styles.playIcon,
                  shuffle && {tintColor: colors.primaryColor},
                ]}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Image source={image.UP_ICON} style={styles.playIcon} />
            <Text style={styles.upText}>Lyrics</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1B1B',
    padding: 20,
  },
  content: {
    justifyContent: 'center',
  },
  banner: {
    width: 335,
    height: 370,
    borderRadius: 25,
    marginBottom: 20,
  },
  musicInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  songName: {
    fontSize: 24,
    color: colors.fontColor,
    fontWeight: 'bold',
  },
  songArtist: {
    fontSize: 16,
    color: colors.fontColor,
  },
  like: {
    width: 24,
    height: 24,
  },
  slider: {
    width: '100%',
    height: 60,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
    alignItems: 'center',
  },
  playIcon: {
    width: 25,
    height: 25,
  },
  playbtn: {
    width: 36,
    height: 36,
    tintColor: colors.white,
  },
  mainBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 72,
    height: 72,
    backgroundColor: colors.primaryColor,
    borderRadius: 34,
  },
  footer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upText: {
    fontSize: 12,
    lineHeight: 17,
    color: colors.fontColor,
  },
});

export default Music;
