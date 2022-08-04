import React from "react";

function Footer() {
	return (
		<div>
			<section className="footer-bookhub">
				<div className="share">
					<a
						href=" "
						target="_blank"
						rel="noreferrer"
						className="footer_for-bookhub"
					>
						<i className="fab fa-twitter"></i>
					</a>
					<a
						href=" "
						target="_blank"
						rel="noreferrer"
						className="footer_for-bookhub"
					>
						<i className="fab fa-linkedin"></i>
					</a>
					<a
						href=" "
						target="_blank"
						rel="noreferrer"
						className="footer_for-bookhub"
					>
						<i className="fab fa-github"></i>
					</a>
				</div>
				<div className="credit">
					Made with 💙 by<span> crazy engineer( A_B_D)  </span>
				</div>
			</section>
		</div>
	);
}

export { Footer };
