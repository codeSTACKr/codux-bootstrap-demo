import { createBoard } from '@wixc3/react-board';
import { ImageGrid } from '../../../components/image-grid/image-grid';

export default createBoard({
    name: 'ImageGrid',
    Board: () => <ImageGrid />,
    environmentProps: {
        windowWidth: 622,
    },
});
