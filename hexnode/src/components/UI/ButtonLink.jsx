import { rightArrowLogo } from "../../constant"


const ButtonLink = ({title, href}) => {
  return (
        <a className="button-link group text-red!" href={href} target='_blank' aria-label={title} >
            {title}
        <span className="arrow text-red group-hover:translate-x-1">
           <img src={rightArrowLogo} />
        </span>
        </a>

  )
}

export default ButtonLink