// import React, { Component } from 'react';
// import {
//   connectStyle,
//   Container,
//   Content,
//   ListItem,
//   Text,
//   Radio,
//   Button
// } from 'native-base';
// import { Picker, PickerProps} from '@react-native-picker/picker'
// import theme from '../theme';
// import navigatorTheme from '../theme/navigator';


// type PickerProps = {
//   navigator: any,
//   modalScreen: string,
//   headerTitle: string,
//   backTitle: string,
//   defaultLabel: string,
//   selectedValue: any,
//   onValueChange: (selectedValue: any) => void,
//   children: React$Element<Picker.Item>
// };

// type PickerModalProps = {
//   navigator: any,
//   backTitle: string,
//   onValueChange: (selectedValue: any) => void,
//   dataSource: Array<{ label: string, value: any }>
// };

// type PickerItemProps = {
//   label: string,
//   value: string,
//   onPress: (value: any) => void
// };

// class Picker extends Component {
//   static defaultProps: PickerProps = {
//     headerTitle: 'Select a Value',
//     backTitle: 'Back',
//     defaultLabel: 'Select a Value'
//   };

//   props: PickerProps;

//   state = {
//     selectedValue: null
//   };

//   get buttonLabel() {
//     const {
//       children,
//       defaultLabel
//     } = this.props;

//     const { selectedValue } = this.state;
//     const selectedChild = Object.values(children)
//       .find(child => child.props.value === selectedValue);

//     return (selectedChild && selectedChild.props.label) || defaultLabel;
//   }

//   get dataSource() {
//     return Object.values(this.props.children)
//       .map(({ props }) => ({
//         label: props.label,
//         value: props.value
//       }));
//   }

//   constructor(props) {
//     super(props);

//     this.openModal = this.openModal.bind(this);
//     this.onValueChange = this.onValueChange.bind(this);
//   }

//   componentDidMount() {
//     this.setSelectedValue(this.props.selectedValue);
//   }

//   componentWillReceiveProps(nextProps) {
//     this.setSelectedValue(nextProps.selectedValue);
//   }

//   setSelectedValue(selectedValue) {
//     if (this.state.selectedValue === selectedValue) {
//       return;
//     }

//     this.setState({ selectedValue });
//   }

//   openModal() {
//     const {
//       modalScreen,
//       headerTitle,
//       backTitle,
//       navigator
//     } = this.props;

//     navigator.showModal({
//       screen: modalScreen,
//       title: headerTitle,
//       navigatorStyle: navigatorTheme(theme.variables),
//       animationType: 'slide-up',
//       passProps: {
//         backTitle,
//         dataSource: this.dataSource,
//         onValueChange: this.onValueChange
//       }
//     });
//   }

//   onValueChange(selectedValue: any) {
//     if (this.state.selectedValue === selectedValue) {
//       return;
//     }

//     const {
//       navigator,
//       onValueChange
//     } = this.props;

//     this.setSelectedValue(selectedValue);
//     onValueChange(selectedValue);

//     navigator.dismissModal();
//   }

//   render() {
//     return (
//       <Button
//         transparent
//         block
//         style={style.button}
//         onPress={this.openModal}
//       >
//         <Text style={style.buttonText}>{this.buttonLabel}</Text>
//       </Button>
//     );
//   }
// }

// class PickerModal extends Component {
//   static defaultProps: PickerModalProps = {
//     backTitle: 'Back',
//     dataSource: [],
//     onValueChange: () => {}
//   };

//   props: PickerModalProps;

//   componentDidMount() {
//     const { navigator } = this.props;

//     navigator.setButtons({
//       leftButtons: [
//         {
//           title: this.props.backTitle,
//           id: 'back'
//         }
//       ]
//     });

//     navigator.setOnNavigatorEvent((event) => {
//       if (event.id === 'back') {
//         navigator.dismissModal();
//       }
//     });
//   }

//   renderItems() {
//     const {
//       dataSource,
//       onValueChange
//     } = this.props;

//     return dataSource.map((data, index) => (
//       <PickerItem
//         key={index}
//         label={data.label}
//         value={data.value}
//         onPress={onValueChange}
//       />
//     ));
//   }

//   render() {
//     return (
//       <Container>
//         <Content>
//           {this.renderItems()}
//         </Content>
//       </Container>
//     );
//   }
// }

// class PickerItem extends Component {
//   props: PickerItemProps;

//   render() {
//     const {
//       label,
//       value,
//       selected,
//       onPress
//     } = this.props;

//     return (
//       <ListItem onPress={() => onPress(value)}>
//           <Radio selected={selected} />
//           <Text>{label}</Text>
//       </ListItem>
//     );
//   }
// }

// const style = {
//   button: {
//     flexGrow: 1,
//     justifyContent: 'flex-start'
//   },

//   buttonText: {
//     color: theme.variables.defaultTextColor
//   }
// };

// Picker.Modal = connectStyle('eb.Picker', style)(PickerModal);
// Picker.Item = connectStyle('eb.Picker', style)(PickerItem);

// export default connectStyle('eb.Picker', style)(Picker);