import { EmbedVideo } from './EmbedVideo'

export const LiveStream = ({
	youtube,
	vimeo,
}: {
	youtube: string // e.g. 'rt_eM_KRfK4',
	vimeo: URL // e.g. 'https://vimeo.com/event/3782646'
}) => (
	<section class="py-4  bg-highlight text-white" id="live">
		<div class="container text-center">
			<div class="row">
				<div class="col-md-8 offset-md-2 pt-4 pb-4">
					<h2 class="fs-4 py-4">Live Stream</h2>
					<EmbedVideo video={youtube} title="Live stream" />
					<p>
						You can watch the live stream{' '}
						<a
							href={vimeo.toString()}
							target="_blank"
							rel="nofollow noreferrer noopener"
						>
							on Vimeo here
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	</section>
)
