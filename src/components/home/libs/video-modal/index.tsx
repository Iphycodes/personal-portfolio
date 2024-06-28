import { Modal } from 'antd';
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';

interface VideoModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const VideoModal = (props: VideoModalProps) => {
  const { isModalOpen, setIsModalOpen } = props;
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [autoplayVideo, setAutoplayVideo] = useState(false);

  const playerRef = useRef<YouTube | null>(null);

  useEffect(() => {
    if (isModalOpen && isPlayerReady && autoplayVideo) {
      // Autoplay the video when the modal is opened and ready
      if (playerRef.current && playerRef.current.internalPlayer) {
        playerRef.current.internalPlayer.playVideo();
      }
    }
  }, [isModalOpen, isPlayerReady, autoplayVideo]);

  useEffect(() => {
    // Set autoplay flag when the modal is opened
    if (isModalOpen) {
      setAutoplayVideo(true);
    } else {
      // Reset autoplay flag when the modal is closed
      setAutoplayVideo(false);
    }
  }, [isModalOpen]);

  const handleOnReady = () => {
    setIsPlayerReady(true);
    if (autoplayVideo) {
      // Autoplay the video once the player is ready
      if (playerRef.current && playerRef.current.internalPlayer) {
        playerRef.current.internalPlayer.playVideo();
      }
    }
  };

  return (
    <Modal
      className="video-modal"
      title={``}
      open={isModalOpen}
      onCancel={() => {
        setIsModalOpen(false);
        if (playerRef.current && playerRef.current.internalPlayer) {
          playerRef.current.internalPlayer.stopVideo();
        }
      }}
      style={{ minWidth: '700px' }}
      footer={null}
      closeIcon={true}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <YouTube
          videoId={'T2M9hSswlIs'}
          opts={{
            width: '100%',
            height: '600px',
            innerHeight: '100%',
            outerHeight: '100%',
            playerVars: { autoPlay: 1 },
          }}
          style={{ width: '100%', height: '100%', minHeight: '100%' }}
          ref={playerRef}
          onReady={handleOnReady}
        />
      </div>
    </Modal>
  );
};

export default VideoModal;
