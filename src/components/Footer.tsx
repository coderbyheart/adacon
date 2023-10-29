import { Cloud, Github, Instagram, Youtube } from 'lucide-preact'

export const Footer = () => (
	<div class="container text-center mt-4">
		<div class="row">
			<div class="col-12 pt-4 pb-4">
				<nav>
					<a
						href="https://www.instagram.com/adacon_no/"
						rel="me"
						title="AdaCon Norway on Instagram"
					>
						<Instagram />
					</a>
					<a
						href="https://www.youtube.com/@AdaConNo"
						rel="me"
						title="AdaCon Norway on YouTube"
						class="ms-4"
					>
						<Youtube />
					</a>
					<a
						href="https://oslo.town/@adacon"
						rel="me"
						title="AdaCon Norway on Mastodon"
						class="ms-4"
					>
						<svg
							width="5.8210001mm"
							height="5.8210001mm"
							viewBox="0 0 20.62559 20.625591"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							title="Mastodon Logo"
						>
							<path
								d="M 10.433745,0.87054998 C 8.0194565,0.89027998 5.6970945,1.151726 4.3436915,1.773283 c 0,0 -2.684201,1.200683 -2.684201,5.297312 0,0.938082 -0.01824,2.059719 0.01148,3.249212 0.09747,4.006278 0.734446,7.954661 4.438545,8.935068 1.70788,0.45205 3.174288,0.546758 4.3552325,0.481845 2.141616,-0.118736 3.343852,-0.764274 3.343852,-0.764274 l -0.07065,-1.553887 c 0,0 -1.530444,0.482528 -3.249211,0.423719 -1.7028935,-0.0584 -3.5006445,-0.183601 -3.7760655,-2.274343 -0.02544,-0.183649 -0.03815,-0.380087 -0.03815,-0.586322 0,0 1.671707,0.408628 3.7902235,0.505692 1.295409,0.05942 2.510171,-0.07589 3.744023,-0.223112 2.366163,-0.282544 4.426416,-1.740463 4.685355,-3.072599 0.407995,-2.098475 0.374388,-5.120999 0.374388,-5.120999 0,-4.096629 -2.684054,-5.297312 -2.684054,-5.297312 -1.3533,-0.621557 -3.677105,-0.88299402 -6.091394,-0.90273302 z"
								style="fill:none;stroke:currentColor;stroke-width:1.7411;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
							/>
							<path
								fill="currentColor"
								d="m 15.485762,7.543566 v 4.415869 H 13.73628 V 7.673361 c 0,-0.903498 -0.380149,-1.362087 -1.140536,-1.362087 -0.840731,0 -1.262091,0.544002 -1.262091,1.619685 V 10.27698 H 9.5944965 V 7.930959 c 0,-1.075683 -0.421453,-1.619685 -1.262181,-1.619685 -0.760389,0 -1.140539,0.458589 -1.140539,1.362087 v 4.286074 H 5.4422955 V 7.543566 c 0,-0.902503 0.229791,-1.619686 0.691369,-2.150282 0.475979,-0.530596 1.099324,-0.802599 1.873119,-0.802599 0.895257,0 1.57322,0.3441 2.0214825,1.03239 l 0.435761,0.730499 0.435854,-0.730499 c 0.448173,-0.68829 1.126137,-1.03239 2.021483,-1.03239 0.773704,0 1.39705,0.272003 1.873119,0.802599 0.461488,0.530596 0.691279,1.247779 0.691279,2.150282"
								style="fill:currentColor;fill-opacity:1;stroke:currentColor;stroke-width:0.818548;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
							/>
						</svg>
					</a>
					<a
						href="https://github.com/adacon-norway"
						rel="me"
						title="AdaCon on GitHub"
						class="ms-4"
					>
						<Github />
					</a>

					<a
						href="https://bsky.app/profile/adacon.bsky.social"
						rel="me"
						title="AdaCon Norway on Bluesky"
						class="ms-4"
					>
						<Cloud />
					</a>
				</nav>
				<nav class="mt-4">
					<a href="https://techwomen.no/" rel="me">
						Tech Women Norway
					</a>
					<a href="./logos" class="ms-4">
						Logo
					</a>
					<a href="./code-of-conduct" rel="me" class="ms-4">
						Code of Conduct
					</a>
				</nav>
				<p class="mt-4 pb-4">
					<small class="fs-6 opacity-75">
						Design based on the awesome{' '}
						<a
							href="https://github.com/xriley/DevConf-Theme"
							target="_blank"
							rel="noopener noreferrer"
						>
							DevConf theme
						</a>{' '}
						by{' '}
						<a
							href="http://themes.3rdwavemedia.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Xiaoying Riley
						</a>
						,{' '}
						<a
							href="https://github.com/adacon-norway/adacon"
							target="_blank"
							rel="noopener noreferrer"
						>
							adapted for Vite/Preact
						</a>{' '}
						by{' '}
						<a
							href="https://coderbyheart.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Markus Tacker
						</a>
						.
					</small>
				</p>
			</div>
		</div>
	</div>
)
