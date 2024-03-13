import ClipLoader from 'react-spinners/ClipLoader';

type Props = {}

const Loader = (props: Props) => {
  return (
    <div className='w-screen h-screen bg-black flex align-middle'>
        <div className='my-auto w-fit m-auto'>
        <ClipLoader
        color={"white"}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    </div>
  )
}

export default Loader