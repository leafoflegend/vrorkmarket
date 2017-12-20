import React, { Component } from 'react';
import {
	WMAppBar,
	WMModal,
	WMIconButton,
	WMFontIcon,
	WMFlatButton,
	WMTextField,
	WMDatePicker,
	WMCheckbox,
} from '@workmarket/front-end-components';
import {
	WMZeroState,
} from '@workmarket/front-end-patterns';
import { connect } from 'react-redux';
import { Actions } from '../store/actions';

class Container extends Component {
	render () {
		const {
			modalOpen,
			openModal,
			closeModal,
		} = this.props;

		return (
			<div>
				<WMAppBar
					title={ 'Deep Work' }
					showMenuIconButton={ false }
				/>
				<WMZeroState
					headerText="Deep Work"
					buttonLabel="Find Work"
					onButtonClick={ openModal }
					style={ { backgroundColor: '#fff' } }
				/>
				<WMModal
					open={ modalOpen }
					onRequestClose={ closeModal }
					title={
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
								borderBottom: 'solid 1px gray',
								padding: 0,
							}}
						>
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'flex-start',
									marginLeft: '10px',
								}}
							>
								<h3> Find Work </h3>
							</div>
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'flex-end',
								}}
							>
								<WMIconButton
									onClick={ closeModal }
								>
									<WMFontIcon
										className={ 'material-icons' }
										color={ 'black' }
										hoverColor={ 'gray' }
									>
										close
									</WMFontIcon>
								</WMIconButton>
							</div>
						</div>
					}
					actions={
						<div
							style={{
								marginRight: '10px',
								marginTop: '10px',
								marginBottom: '10px',
							}}
						>
							<WMFlatButton
								label={ 'Find Work' }
								onClick={ () => {} }
							/>
						</div>
					}
					actionsContainerStyle={{
						padding: 0,
						borderTop: 'solid 1px gray',
					}}
				>
					<div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'flex-start',
								alignItems: 'center',
							}}
						>
							<span> Search Text </span>
							<WMTextField
								onChange={ () => {} }
							/>
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'flex-start',
								alignItems: 'center',
							}}
						>
							<span> Strike Price </span>
							<WMTextField />
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'flex-start',
								alignItems: 'center',
							}}
						>
							<span> Date </span>
							<WMDatePicker id={ 'date-picker' } />
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'flex-start',
								alignItems: 'center',
							}}
						>
							<span> Schedule Anytime? </span>
							<WMCheckbox />
						</div>
					</div>
				</WMModal>
			</div>
		)
	}
}

const mapStateToProps = ({
	modalOpen,
}) => ({
	modalOpen,
});

const mapDispatchToProps = (dispatch) => ({
	openModal: () => { dispatch(Actions.openModal()) },
	closeModal: () => { dispatch(Actions.closeModal()) },
});

const ConnectedContainer = connect(mapStateToProps, mapDispatchToProps)(Container);

export default ConnectedContainer;
