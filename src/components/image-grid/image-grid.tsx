import classNames from 'classnames';
import styles from './image-grid.module.scss';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

export interface ImageGridProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-image-grids-and-templates
 */

export const ImageGrid = ({ className }: ImageGridProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Container>
                <Row>
                    <Col>
                        <Image
                            src="https://static.wixstatic.com/media/68d3a9_e54bc05fc07647e189baeee0441eb104~mv2.jpg"
                            alt="descriptive text"
                            fluid
                        />
                        Item-1
                    </Col>
                    <Col>
                        <Image
                            src="https://static.wixstatic.com/media/68d3a9_e54bc05fc07647e189baeee0441eb104~mv2.jpg"
                            alt="descriptive text"
                            fluid
                        />
                        Item-2
                    </Col>
                    <Col>
                        <Image
                            src="https://static.wixstatic.com/media/68d3a9_e54bc05fc07647e189baeee0441eb104~mv2.jpg"
                            alt="descriptive text"
                            fluid
                        />
                        Item-3
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
