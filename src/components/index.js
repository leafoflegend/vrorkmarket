import React, { Component } from 'react';
import {
	WMAppBar,
	WMPaper,
	WMIconButton,
	WMFontIcon,
} from '@workmarket/front-end-components';
import { connect } from 'react-redux';
import { Actions } from '../store/actions';

class Container extends Component {
	componentDidMount () {
		this.props.fetchAssignments();
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
									height: '500px',
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
									<h3> Some Job </h3>
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
