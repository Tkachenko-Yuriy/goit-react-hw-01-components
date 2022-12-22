import PropTypes from 'prop-types';
import {FriendsItem,Chip,Avatar,Friendsname} from '../FriendListItem/FriendListItem.styled'

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <Chip isOnline={isOnline}>{isOnline}</Chip>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Friendsname>{name}</Friendsname>
    </FriendsItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
