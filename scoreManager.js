(function () {
	// localStorage key
	const KEY = 'hangwan_score_v1';

	function read() {
		const raw = localStorage.getItem(KEY);
		const n = parseInt(raw, 10);
		return Number.isFinite(n) ? n : 0;
	}

	function write(value) {
		localStorage.setItem(KEY, String(value));
	}

	function getScore() {
		return read();
	}

	function addScore(points) {
		const cur = read();
		const next = Math.max(0, cur + (Number(points) || 0));
		write(next);
		return next;
	}

	function resetScore() {
		write(0);
		return 0;
	}

	// Export
	window.scoreManager = {
		getScore,
		addScore,
		resetScore
	};
})();


let score = 0;

function win() {
    score += 10; // Increase score by 10 when winning
}

function lose() {
    score = 0; // Reset score when losing

}
