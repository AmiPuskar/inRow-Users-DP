import React from 'react';
import Avatar from 'react-avatar';
import './App.css';

const MAX_AVATARS_DISPLAYED = 6;

const AvatarRow: React.FC<{ avatars: string[] }> = ({ avatars }) => {
  const displayedAvatars = avatars.slice(0, MAX_AVATARS_DISPLAYED);
  const extraAvatarsCount = avatars.length - MAX_AVATARS_DISPLAYED;

  return (
    <div className="avatar-row">
      {displayedAvatars.map((avatar, index) => (
        <Avatar
          key={index}
          name={`Avatar ${index + 1}`}
          src={avatar}
          size="40"
          round={true}
          // style={{ marginLeft: `${index * -20}px` }}
        />
      ))}
      {extraAvatarsCount > 0 && (
        <div
          className="more-avatars"
          // style={{ marginLeft: `${(MAX_AVATARS_DISPLAYED - 1) * -20}px` }}
        >
          +{extraAvatarsCount}
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const avatarUrls = [
    'https://dosen.io/images/litters-images/p.png',
    'https://dosen.io/images/litters-images/u.png',
    'https://dosen.io/images/litters-images/s.png',
    'https://dosen.io/images/litters-images/k.png',
    'https://dosen.io/images/litters-images/a.png',
    'https://dosen.io/images/litters-images/r.png',
    'https://dosen.io/images/litters-images/k.png',
    'https://dosen.io/images/litters-images/o.png',
    'https://dosen.io/images/litters-images/l.png',
    'https://dosen.io/images/litters-images/e.png',
    'https://dosen.io/images/litters-images/y.png',
  ];

  return (
    <div className="App">
      <h1 className='text-center'>Avatar Row</h1>
      <AvatarRow avatars={avatarUrls} />
    </div>
  );
};

export default App;
