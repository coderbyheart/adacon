import { Con } from './../con.js'

export const Tickets = () => (
	<section id="tickets" class="mt-4 bg-highlight text-white">
		<div class="container mt-4 py-4">
			<div class="row text-center py-4">
				<h2 class="py-4">Tickets</h2>
			</div>
			<div class="row pb-lg-5">
				<div class="col text-center">
					{Con.ticketsLink !== undefined && (
						<>
							<p>AdaCon Norway attendance is free.</p>
							<p>
								We have only {Con.statistics.attendees} seats,
								<br />
								so{' '}
								<strong>
									please only register for tickets you will actually use
								</strong>
								!
							</p>
							<p>
								<a
									href={Con.ticketsLink.toString()}
									target="_blank"
									rel="noreferrer noopener"
									class="btn btn-success"
								>
									Register here
								</a>
							</p>
						</>
					)}
					{Con.ticketsLink === undefined && (
						<>
							<p>
								The registration opens on{' '}
								{new Intl.DateTimeFormat(undefined, {
									dateStyle: 'full',
								}).format(Con.registrationOpens)}
								.
							</p>
							<p>AdaCon Norway attendance will be free.</p>
							<p>
								If you want to get notified once the ticket registration opens,
								<br />
								<br />
								<a
									href={Con.notificationLink.toString()}
									target="_blank"
									rel="noreferrer noopener"
									class="btn btn-success"
								>
									please fill out this form
								</a>
							</p>
						</>
					)}
				</div>
			</div>
		</div>
	</section>
)
