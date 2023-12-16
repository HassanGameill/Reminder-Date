import { Col, Row } from "react-bootstrap"





const DatesCount = ({person}) => {
  return (
    <Row className="justify-content-center">
          <Col sm="8" className="">


            <div className="p-2">
              You Have {person.length} Dates Today
            </div>
          </Col>
        </Row>

  )
}

export default DatesCount
