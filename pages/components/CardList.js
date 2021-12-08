
import { Card, Image } from 'react-bootstrap'

import Link from 'next/link'


const CardList = ({title,subtitle,author,datetimes,link,mode='normal'}) => {
    return (
        <Card className={`fj-card fj-card-list ${mode}`}>
            <div className="card-body-wrapper">
                <Card.Header
                    className="d-flex flex-row">
                    <Image
                        roundedCircle
                        width={64}
                        height={64}
                        className="mr-3"
                        src={author?.avatar}
                        alt="Generic placeholder"
                    />
                    {
                        mode=== 'placeholder'?
                        
                        <div>
                        <Card.Title className="font-weight-bold mb-1">PlaceHolder Name</Card.Title>
                        <Card.Text className="card-date">Current Date</Card.Text>
                        </div>
                        
                        :
                        <div>
                        <Card.Title className="font-weight-bold mb-1">{author?.name}</Card.Title>
                        <Card.Text className="card-date">{datetimes}</Card.Text>
                        </div>
                        
                    }

                    {/* <div>
                        <Card.Title className="font-weight-bold mb-1">{author?.name}</Card.Title>
                        <Card.Text className="card-date">{datetimes}</Card.Text>
                    </div> */}
                </Card.Header>
                <Card.Body>
                    {
                        mode==='placeholder'?
                        <>
                         <Card.Title className="card-main-title">Title</Card.Title>
                    <Card.Text>SubTitle</Card.Text>
                    </>
                    :
                    <>
                     <Card.Title className="card-main-title">{title}</Card.Title>
                    <Card.Text>{subtitle}</Card.Text>
                    </>
                    }
                </Card.Body>
                    {/* <Card.Title className="card-main-title">{title}</Card.Title>
                    <Card.Text>{subtitle}</Card.Text> */}
            </div>
            {link &&
            <Link {...link} >
            <a className="card-button">
                Read More
            </a>
            </Link>
            }
        </Card>

    )
}
export default CardList