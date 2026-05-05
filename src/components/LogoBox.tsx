import logoSmall from '@/assets/images/logo-icon.png'
import logoLight from '@/assets/images/logo-light.png'
import logo from '@/assets/images/logo.png'
import Image from 'next/image'
import { NavbarBrand } from 'react-bootstrap'

type LogoBoxProps = {
  className?: string
  smallIcon?: boolean
  imageClassName?: string
}

const LogoBox = ({ className, smallIcon, imageClassName }: LogoBoxProps) => {
  return smallIcon ? (
    <Image src={logoSmall} className={className ?? ''} alt="Seng Heng logo" width={50} height={50} />
  ) : (
    <NavbarBrand className={className ?? ''} href='/'>
      <Image className={`light-mode-item h-40px ${imageClassName ?? ''} `} src={logo} alt="Seng Heng logo" width={120} height={40} />
      <Image className={`dark-mode-item h-40px ${imageClassName ?? ''}`} src={logoLight} alt="Seng Heng logo" width={120} height={40} />
    </NavbarBrand>
  )
}

export default LogoBox
