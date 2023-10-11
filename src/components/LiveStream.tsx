import { Con } from '../con.js'
import { EmbedYouTubeVideo } from './EmbedYouTubeVideo.js'
export const LiveStream = () => {
	if (Con.liveStream?.youtubeVideoId === undefined) return null

	return (
		<section class="py-4  bg-highlight text-white" id="live">
			<div class="container text-center">
				<div class="row">
					<div class="col-md-8 offset-md-2 pt-4 pb-4">
						<h2 class="fs-4 py-4">Live Stream</h2>
						<EmbedYouTubeVideo video={Con.liveStream?.youtubeVideoId} />
						{Con.liveStream?.vimeoId !== undefined && (
							<p>
								You can watch the live stream{' '}
								<a
									href={`https://vimeo.com/event/${Con.liveStream?.vimeoId}`}
									target="_blank"
									rel="nofollow noreferrer noopener"
								>
									on Vimeo here
								</a>
								.
							</p>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}
