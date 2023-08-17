export const ContactForm = () => {
	return (
		<form action="https://formspree.io/f/mjvdwjwp" method="POST">
			<div class="mb-3">
				<label htmlFor="email" class="form-label">
					Your email address
				</label>
				<input
					type="email"
					class="form-control"
					id="email"
					aria-describedby="emailHelp"
					required
					placeholder='e.g. "ada@example.com"'
					name="email"
				/>
				<div id="emailHelp" class="form-text">
					We'll never share your email with anyone else.
				</div>
			</div>
			<div class="mb-3">
				<label htmlFor="name" class="form-label">
					Your name
				</label>
				<input
					type="text"
					minLength={1}
					class="form-control"
					aria-describedby="nameHelp"
					id="name"
					required
					placeholder='e.g. "Ada Lovelace"'
					name="name"
				/>
				<div id="nameHelp" class="form-text">
					How would you like us to call you?
				</div>
			</div>
			<div class="mb-3">
				<label htmlFor="message" class="form-label">
					Your message
				</label>
				<textarea
					class="form-control"
					required
					minLength={1}
					aria-describedby="messageHelp"
					id="message"
					name="message"
					placeholder='e.g. "Here is an idea ..."'
				/>
				<div id="messageHelp" class="form-text">
					What would you like to tell us?
				</div>
			</div>
			<button type="submit" class="btn btn-primary">
				Submit
			</button>
		</form>
	)
}
