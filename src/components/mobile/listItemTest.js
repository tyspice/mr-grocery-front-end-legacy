import React from 'react';
import { Container } from 'react-bootstrap';
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io'

class ListItemTest extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleClick(this.props.item);
    }

    render() {
        const checked = this.props.item.checked
        let checkbox;

        checked ? checkbox = <IoIosRadioButtonOn /> : checkbox = <IoIosRadioButtonOff />; 

        const background = (item) => {
            let itemColor;
            switch (item.inventoryStatus) {
                case 'Well Stocked':
                    itemColor = '#05c46b'
                    break;
                case 'Could Get More':
                    itemColor = '#ffc048'
                    break;
                default:
                    itemColor = '#ff5e57'
                    break;
            }
            return itemColor;
        }

        const styles = {
            container: {
                display: "inline-flex", 
                alignItems: "center",
                margin: "0px 0px 5px 0px",
                borderRadius: "10px",
                borderStyle: "solid",
                borderWidth: "1px",
                backgroundColor: background(this.props.item)
            },
            itemContainer: {
                padding: "10px 5px"
            },
            notes: {
                fontSize: "75%",
                color: "#485460"
            }
        }
        
        return(
        <Container onClick={ this.handleClick } style={ styles.container }>
            { checkbox }
            <div style={ styles.itemContainer }>
            <div>{ this.props.item.item }</div>
            <div style={ styles.notes }>{ this.props.item.notes }</div>
            </div>
        </Container>
        );
    }

}

export default ListItemTest;