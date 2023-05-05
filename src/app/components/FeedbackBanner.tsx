import { MdCheck, MdClose } from "react-icons/md"

type FeedbackBannerProps = {
  text: string
  onClose?: VoidFunction
}

export const FeedbackBanner = ({ text, onClose }: FeedbackBannerProps) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-20 bg-white grid place-items-center">
      <div className="relative w-full flex justify-center items-center gap-4">
        <MdCheck size={20} className="text-functional-pure" />
        <p className="text-xs text-black uppercase">{text}</p>
        <button 
          type="button" 
          className="text-xs text-black px-6 absolute right-1 top-1/2 -translate-y-1/2" 
          onClick={onClose}
        >
          <MdClose size={20} />
        </button>
      </div>
    </div>
  )
}
