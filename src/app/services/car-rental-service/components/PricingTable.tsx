import { Container, Table } from 'react-bootstrap'

const vehicles = [
  { name: 'Perodua Myvi (2022)', transmission: 'AUTO', daily: 'RM 120', monthly: 'RM 1,800' },
  { name: 'Toyota Avanza (2010)', transmission: 'AUTO', daily: 'RM 120', monthly: 'RM 1,800' },
  { name: 'Toyota Fortuner (2011)', transmission: 'AUTO', daily: 'RM 320', monthly: 'RM 4,500' },
  { name: 'Toyota Hilux GR (2023)', transmission: 'AUTO', daily: 'RM 400', monthly: 'RM 6,200' },
  { name: 'Toyota Hiace New Model (2026)', transmission: 'AUTO', daily: 'RM 450', monthly: 'RM 6,800' },
  { name: 'Nissan Urvan (2013)', transmission: 'Manual', daily: 'RM 350', monthly: 'RM 4,800' },
]

const PricingTable = () => {
  return (
    <section className="pt-5 pb-0">
      <Container>
        <div className="inner-container-small text-center mb-4 mb-sm-6">
          <span className="bg-primary bg-opacity-10 text-primary text-uppercase rounded small px-3 py-2">Rental Rates</span>
          <h2 className="mt-4 mb-2">Vehicle Pricing</h2>
          <p className="mb-0 text-muted">Rates apply for use within Miri City. Outbound trips to other cities are subject to different rates — contact us for a quote.</p>
        </div>
        <div className="card border-0 shadow-sm overflow-hidden">
          <Table responsive className="mb-0 align-middle">
            <thead className="bg-primary">
              <tr>
                <th className="px-4 py-3 fw-semibold text-white">Vehicle</th>
                <th className="px-4 py-3 fw-semibold text-white">Transmission</th>
                <th className="px-4 py-3 fw-semibold text-white text-center">Daily Rate</th>
                <th className="px-4 py-3 fw-semibold text-white text-center">Monthly Rate</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((v, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-light'}>
                  <td className="px-4 py-3 fw-semibold">{v.name}</td>
                  <td className="px-4 py-3">
                    <span className={`badge rounded-pill px-3 py-2 ${v.transmission === 'AUTO' ? 'bg-primary bg-opacity-10 text-primary' : 'bg-secondary bg-opacity-10 text-secondary'}`}>
                      {v.transmission}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center fw-bold text-primary">{v.daily}<span className="text-muted fw-normal small"> /day</span></td>
                  <td className="px-4 py-3 text-center fw-bold">{v.monthly}<span className="text-muted fw-normal small"> /month</span></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  )
}

export default PricingTable
