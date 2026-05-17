import { currentYear } from '@/states/constants'

const CreditWithLanguage = () => {
  return (
    <div className="d-md-flex justify-content-between align-items-center text-center text-lg-start py-4">
      <div className="text-body">
        
        Copyrights ©{currentYear} Seng Heng Shipping Sdn Bhd. Build by <a href="https://www.designspace.my" target='_blank' className="text-decoration-underline">design<strong>space</strong></a>
        {/* <Link href={developedByLink} className="text-body text-primary-hover" target="_blank">
          {developedBy}
        </Link>
        . */}
      </div>
      {/* <LanguageDropdown /> */}
    </div>
  )
}

export default CreditWithLanguage
