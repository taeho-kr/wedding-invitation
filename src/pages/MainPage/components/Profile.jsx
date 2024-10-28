import styled from "styled-components";

const ProfileBadge = ({ image, name, hasNewStory, isOfficial }) => {
  return (
    <ComponentWrapper>
      <BadgeImage src={image} />
      <BadgeName>{name}</BadgeName>
      {hasNewStory && <NewStoryBadge />}
      {isOfficial && <OfficialBadge />}
    </ComponentWrapper>
  );
};

const ComponentWrapper = styled.div`
  height: 100%;
`;

const BadgeImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const BadgeName = styled.div`
  margin-top: 4px;
  font-size: 12px;
  font-weight: 500;
`;

const NewStoryBadge = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #4caf50;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const OfficialBadge = styled.div`
  width: 16px;
  height: 16px;
  background-color: #2196f3;
  border-radius: 50%;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export default ProfileBadge;
