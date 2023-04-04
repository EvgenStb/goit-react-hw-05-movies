import { ReviewContainer, AuthorLable } from './ReviewsCard.styled';

const ReviewCard = ({id, author, content, created_at}) => {
    const date = created_at.slice(0, 10);
    return (
      <ReviewContainer key={id}>
        <AuthorLable>
          Author:   <span>{author}</span>
        </AuthorLable>
        <p>
          Rewiew:<span>{content}</span>
        </p>
        <p>Date: <span>{date}</span></p>
      </ReviewContainer>
    );
}
 
export default ReviewCard;