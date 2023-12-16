
import { Col, Row } from "react-bootstrap";



const DatesList = ({person}) => {
  return (
    <Row className="justify-content-center">
          <Col sm="8" className="">
            <div className="rectangle p-2 ">

              {person.length ? (
                person.map((prs) => {
                  return (

                    <div className="d-flex border-bottom mx-3 my-2" key={prs.id}>
                      
                      <img className="image" src={prs.image} alt="Image"/>

                      <div className="px-3 py-1">
                        <p className="d-inline fs-5">{prs.name}</p>
                        <p className="fs-6">{prs.date}</p>
                      </div>

                      

                   </div>
                  )
                })
              ) : <h2 className="p-5 text-center">There is no Date Today</h2>}

              
              

            </div>

          </Col>
        </Row>
  )
}

export default DatesList;
