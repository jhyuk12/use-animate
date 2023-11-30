import ImageComp from './ImageComp';

const B = () => {
  return (
    <div className='bg-blue-100 min-h-screen flex flex-col justify-center items-center gap-20'>
      <ImageComp animateName='animate__bounce' image='jungle.jpg' />
      <ImageComp animateName='animate__rotateIn' image='cs.jpg' />
    </div>
  );
};

export default B;
