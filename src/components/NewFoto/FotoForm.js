import "./FotoForm.css";

const FotoForm = () => {
	return (
	<form>
		<div className="new-foto__controls">
			<div className="new-foto__control">
				<label>Ник</label>
				<input type="text"/>
			</div>
			<div className="new-foto__control">
				<label>Пароль</label>
				<input type="password"/>
			</div>
			<div className="new-foto__control">
				<label>Электронная почта</label>
				<input type="email"/>
			</div>
			<div className="new-foto__control">
				<label>Фотография</label>
				<input type="file"/>
			</div>
			<div className="new-foto__control">
				<label>Описание фотографии</label>
				<input type="text"/>
			</div>
			<div className="new-foto__control">
				<label>Теги</label>
				<input type="text"/>
			</div>
			<div className="new-foto__actions">
				<button type="submit">Добавить</button>
			</div>
		</div>
	</form>
	);
};

export default FotoForm;