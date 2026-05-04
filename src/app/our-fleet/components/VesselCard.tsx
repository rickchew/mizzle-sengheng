import Image from 'next/image'
import Link from 'next/link'
import { Badge, Card, CardBody, CardFooter } from 'react-bootstrap'
import { BsDownload, BsEnvelope } from 'react-icons/bs'
import { VesselType } from '../types'

type VesselCardProps = {
  vessel: VesselType
}

const categoryColors: Record<string, string> = {
  offshore: 'primary',
  passenger: 'success',
  'landing-craft': 'warning',
}

const VesselCard = ({ vessel }: VesselCardProps) => {
  return (
    <Card className="card-hover-shadow border h-100 overflow-hidden">
      <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
        <Image
          src={vessel.image}
          alt={`${vessel.name} - vessel`}
          fill
          className="object-fit-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <CardBody className="p-4">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="mb-0 heading-color">{vessel.name}</h5>
          <Badge bg={categoryColors[vessel.category]} className="ms-2 flex-shrink-0">
            LOA {vessel.loa}
          </Badge>
        </div>
        <p className="small text-muted mb-3">{vessel.type}</p>
        <p className="mb-0">{vessel.description}</p>
      </CardBody>

      <CardFooter className="bg-transparent p-4 pt-0 border-0">
        <div className="d-flex gap-2 flex-wrap">
          <Link
            href={vessel.pdfFile ? `/fleet-docs/${vessel.pdfFile}` : '#'}
            className="btn btn-outline-primary btn-sm icons-center"
            target={vessel.pdfFile ? '_blank' : undefined}
          >
            <BsDownload className="me-1" />
            Ship Particular
          </Link>
          <Link href="/contact" className="btn btn-primary btn-sm icons-center">
            <BsEnvelope className="me-1" />
            Enquire
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

export default VesselCard
