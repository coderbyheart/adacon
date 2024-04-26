import type { Host, Speaker } from '../../pages/content/+onBeforeRender'
import './Speakers.css'
import { SpeakerCard } from './SpeakerCard'
import { speakersByYear } from '../speakersByYear'
import { Con } from '../con.js'

export const Speakers = ({ speakers }: { speakers: Speaker[] }) => {
	const year = Con.date.getFullYear()
	const upcomingSpeakers = speakersByYear(speakers, year)
	const hosts = speakers
		.filter((speaker) => 'role' in speaker && speaker.role === 'host')
		.sort(
			(s1, s2) =>
				('order' in s1 ? s1.order : Number.MAX_SAFE_INTEGER) -
				('order' in s2 ? s2.order : Number.MAX_SAFE_INTEGER),
		) as Host[]

	return (
		<section id="speakers" class="bg-highlight py-4">
			<div class="container mt-4">
				<div class="row py-4 text-white ">
					<div class="col-12 col-md-8 offset-md-2">
						<h2 class="py-4 text-center ">Speakers {year}</h2>
						{upcomingSpeakers.length === 0 && (
							<>
								<p>
									Help us build an amazing line-up by tipping us great speakers
									and workshop facilitators using our Help us build an amazing
									line-up for the next AdaCon Norway by tipping us great
									speakers and workshop facilitators using our
								</p>
								<p class="text-center">
									<a
										href="https://forms.gle/53atUvDmZvn3ypTc6"
										target="_blank"
										rel="noreferrer noopener"
										class="btn btn-success"
									>
										speaker submission form
									</a>
								</p>
								<p>
									We plan a full day conference with talks and workshops. We are
									looking for members of the tech scene in Norway that are
									hands-on creators, builders, and makers of technology. We want
									to see those who love to share about a topic or a project that
									matters to them and that the audience will benefit from
									learning about. We do not care about experience as a speaker.
									We will pair all our speakers with a personal coach to help
									prepare for the event.
								</p>
							</>
						)}
					</div>
				</div>
				<div class="py-lg-5 speakers">
					{upcomingSpeakers.map((speaker) => (
						<SpeakerCard speaker={speaker} key={speaker.slug} />
					))}
				</div>

				{hosts.length > 0 && (
					<>
						<div class="row text-center py-4 text-white ">
							<h2 class="py-4">Hosted by</h2>
							<div class="d-flex justify-content-center">
								{hosts.map((host) => (
									<SpeakerCard speaker={host} key={host.slug} />
								))}
							</div>
						</div>
					</>
				)}
			</div>
		</section>
	)
}
