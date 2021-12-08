

import { Card, Image } from 'react-bootstrap'

import Link from 'next/link'
import { urlFor } from '../../libs/api';


const CardItem = ({title,subtitle,coverimage,author,datetimes,link,mode='normal'}) => {
    return (

        <Card className={`fj-card ${mode}`}>
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
                    <div>
                        {
                            mode === 'placeholder' ?
                            <>
                            <Card.Title className="font-weight-bold mb-1">Pavan Kumar</Card.Title>
                        <Card.Text className="card-date">Current Date</Card.Text>
                            </>
                            :
                            <>
                            <Card.Title className="font-weight-bold mb-1">{author?.name}</Card.Title>
                        <Card.Text className="card-date">{author?.date}</Card.Text>
                            </>
                        }
                        {/* <Card.Title className="font-weight-bold mb-1">{author?.name}</Card.Title>
                        <Card.Text className="card-date">{author?.date}</Card.Text> */}
                    </div>
                </Card.Header>
                <div className="view overlay">
                    {
                            mode==='placeholder'?
                            <div className='image-placeholder'/>
                            :
                            <Card.Img
                            src={urlFor(coverimage).height(280).fit('max').url()}
                            alt="Card image cap"
                        />
                    }
                    {/* <Card.Img
                        src={urlFor(coverimage).height(280).fit('max').url()}
                        alt="Card image cap"
                    /> */}
                </div>
                <Card.Body>
                    {
                        mode==='placeholder'?
                        <>
                        <Card.Title className="card-main-title">Title</Card.Title>
                    <Card.Text>Sub Title</Card.Text>
                    <p>Date</p>
                    </>
                    :
                    <>
                    <Card.Title className="card-main-title">{title}</Card.Title>
                    <Card.Text>{subtitle}</Card.Text>
                    <p>{datetimes}</p>
                    </>
                    }
                </Card.Body>
                    {/* <Card.Title className="card-main-title">{title}</Card.Title>
                    <Card.Text>{subtitle}</Card.Text>
                    <p>{datetimes}</p> */}
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
export default CardItem