import React, { Component } from 'react';
import {
	WMAppBar,
	WMPaper,
	WMIconButton,
	WMFontIcon,
	WMText,
	WMFlatButton,
} from '@workmarket/front-end-components';
import { connect } from 'react-redux';
import moment from 'moment';
import { Actions } from '../store/actions';

const convertToCurrency = (num) => {
	const [dollars, cents] = num
		.toFixed(2)
		.toString()
		.split('.');

	let spacesFromStart = 0;

	return `$${dollars
		.split('')
		.reduceRight((str, digit, i, array) => {
			spacesFromStart += 1;
			return (!(spacesFromStart % 3) && spacesFromStart !== array.length)
				? `,${digit}${str}` // eslint-disable-line
				: `${digit}${str}`;
		}, '')}.${cents}`;
};

class Container extends Component {
	componentDidMount () {
		this.props.fetchAssignments();
	}

	get activeAssignment() {
		return this.props.assignments[this.props.currentAssignment - 1]
			? this.props.assignments[this.props.currentAssignment - 1]
			: {
				price: 0,
				description: '',
				title: '',
				date: moment(),
			}
	}

	render () {
		const {
			assignments,
			currentAssignment,
			setAssignment,
		} = this.props;

		return (
			<div
				style={{
					fontFamily: 'Open Sans',
				}}
			>
				<WMAppBar
					title={ 'Most Recommended Assignments' }
					showMenuIconButton={ false }
				/>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-around',
						alignItems: 'center',
					}}
				>
					<h3> { `${currentAssignment}/${assignments.length} Highly Reccomended Assignments` } </h3>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-around',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
							alignItems: 'center',
						}}
					>
						<div>
							<WMIconButton
								disabled={ currentAssignment <= 1 }
								onClick={ () => {
									setAssignment(currentAssignment - 1);
								} }
							>
								<WMFontIcon
									className={ 'material-icons' }
								>
									navigate_before
								</WMFontIcon>
							</WMIconButton>
						</div>
						<div
							style={{
								marginTop: '20px',
							}}
						>
							<WMPaper
								zDepth={ 3 }
								style={{
									width: '400px',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'flex-start',
									alignItems: 'center',
								}}
							>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'flex-start',
										alignItems: 'center',
										borderBottom: 'solid 1px gray',
										width: '90%',
									}}
								>
									<h3> { this.activeAssignment.title } </h3>
								</div>
								<div>
									<WMText>
										{ this.activeAssignment.description }
									</WMText>
								</div>
								<div
									style={{
										width: '90%',
										height: '10px',
									}}
								/>
								<div
									style={{
										width: '90%',
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'flexStart',
										alignItems: 'center',
										paddingTop: '1em',
										paddingBottom: '1em',
									}}
								>
									<span> { 'Price: ' } </span>
									<span
										style={{
											color: 'green',
											marginLeft: '0.5em',
										}}
									>
										{ convertToCurrency(this.activeAssignment.price) }
									</span>
								</div>
								<div
									style={{
										marginTop: '10px',
										display: 'flex',
										flexDirection: 'row',
										width: '100%',
										height: '50px',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<WMFlatButton
										label={ 'Apply for Assignment' }
									/>
								</div>
							</WMPaper>
						</div>
						<div>
							<WMIconButton
								disabled={ currentAssignment >= assignments.length }
								onClick={ () => {
									setAssignment(currentAssignment + 1);
								} }
							>
								<WMFontIcon
									className={ 'material-icons' }
								>
									navigate_next
								</WMFontIcon>
							</WMIconButton>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({
	assignments,
	currentAssignment,
}) => ({
	assignments,
	currentAssignment,
});

const mapDispatchToProps = (dispatch) => ({
	fetchAssignments: () => { dispatch(Actions.fetchAssignments()); },
	setAssignment: (num) => { dispatch(Actions.setAssignment(num)); },
});

const ConnectedContainer = connect(mapStateToProps, mapDispatchToProps)(Container);

export default ConnectedContainer;
