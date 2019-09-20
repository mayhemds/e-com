import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';




class Directory extends React.Component {
    constructor() {
        super();


        this.state = {
            sections: [{
                    title: 'hats',
                    imageUrl: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://images.unsplash.com/photo-1554235718-40c0aba221a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
                    id: 2
                },
                {
                    title: 'trainers',
                    imageUrl: 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
                    id: 3
                },
                {
                    title: 'women',
                    imageUrl: 'https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=951&q=80',
                    size: 'large', 
                    id: 4
                },
                {
                    title: 'men',
                    imageUrl: 'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
                    size: 'large',
                    id: 5
                }
            ]
        }
    }
    render() {
        return (
            <div className='directory-menu'>
            {
                this.state.sections.map(({ title, imageUrl, id, size }) => (
                    <MenuItem title={title} key={id} imageUrl={imageUrl} size={size}/>
                ))
            }
            </div>
        )
    }
}
export default Directory;