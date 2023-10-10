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
						href="https://matrix.to/#/#space:adacon.no"
						rel="me"
						title="AdaCon Norway on Matrix"
						class="ms-4"
					>
						<svg
							width="32.120041"
							height="33.981674"
							viewBox="0 0 32.120041 33.981674"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							style={{ width: 24, height: 24 }}
						>
							<polygon
								points="0.93631479,0.73220178 0.93631479,31.249567 3.1294248,31.249567 3.1294248,31.981769 0.094721871,31.981769 0.094721871,9.495549e-05 3.1294248,9.495549e-05 3.1294248,0.73220178 "
								style="fill:currentColor;fill-rule:nonzero;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
								transform="translate(0.90527813,0.99990504)"
							/>
							<path
								d="m 10.290992,11.406552 v 1.544356 h 0.0439 c 0.411315,-0.587869 0.906732,-1.04432 1.487105,-1.367929 0.579994,-0.323038 1.244849,-0.485222 1.993711,-0.485222 0.719469,0 1.376833,0.140059 1.971523,0.419228 0.59488,0.279644 1.046587,0.772083 1.355025,1.478172 0.337548,-0.49994 0.796461,-0.941293 1.376834,-1.323679 0.579993,-0.382196 1.266561,-0.573721 2.059797,-0.573721 0.602181,0 1.159988,0.07369 1.674463,0.220771 0.513717,0.147086 0.95433,0.382386 1.321555,0.705899 0.366846,0.323799 0.653192,0.746635 0.859229,1.268321 0.205468,0.522635 0.308439,1.15105 0.308439,1.88667 v 7.633092 l -3.128382,-9.5e-5 v -6.464 c 0,-0.382196 -0.0146,-0.742551 -0.04409,-1.081068 -0.02968,-0.338041 -0.110082,-0.632024 -0.242257,-0.882421 -0.132269,-0.249828 -0.327117,-0.44857 -0.583786,-0.595751 -0.257048,-0.146516 -0.605973,-0.220487 -1.046492,-0.220487 -0.440518,0 -0.796744,0.08508 -1.068489,0.253626 -0.271934,0.169401 -0.484703,0.390173 -0.63878,0.661935 -0.154172,0.272427 -0.257048,0.581128 -0.308344,0.926956 -0.05167,0.345448 -0.07718,0.694884 -0.07718,1.047834 v 6.353471 h -3.128097 v -6.397626 c 0,-0.338231 -0.0077,-0.672949 -0.02181,-1.003679 -0.01498,-0.33111 -0.07718,-0.636202 -0.187547,-0.915846 -0.110177,-0.279169 -0.293837,-0.503644 -0.55079,-0.673045 -0.257048,-0.168545 -0.635177,-0.253626 -1.134482,-0.253626 -0.147061,0 -0.341625,0.03314 -0.583692,0.09951 -0.242351,0.06618 -0.477497,0.19143 -0.704962,0.374979 -0.227939,0.184024 -0.422313,0.44876 -0.583881,0.794113 -0.161662,0.345828 -0.242351,0.797816 -0.242351,1.356629 v 6.618492 l -3.1280028,9.5e-5 V 11.406552 Z"
								style="font-variation-settings:normal;opacity:1;vector-effect:none;fill:currentColor;fill-opacity:1;fill-rule:nonzero;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;-inkscape-stroke:none;stop-color:currentColor;stop-opacity:1"
							/>
							<polygon
								points="71.900727,0.73220178 71.900727,9.495549e-05 74.93562,9.495549e-05 74.93562,31.981769 71.900727,31.981769 71.900727,31.249567 74.093837,31.249567 74.093837,0.73220178 "
								style="font-variation-settings:normal;opacity:1;vector-effect:none;fill:currentColor;fill-opacity:1;fill-rule:nonzero;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;-inkscape-stroke:none;stop-color:currentColor;stop-opacity:1"
								transform="translate(-43.81558,0.99990504)"
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
