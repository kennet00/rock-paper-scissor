//random generator for computers choice
let computer = () => {
	let i = Math.floor(Math.random() * 3);
	if (i == 0) {
		return "rock";
	} else if (i == 1) {
		return "paper";
	} else {
		return "scissors";
	}
};
//compares players choice and computer choice and determines winner
let playRound = (e) => {
	let li = document.createElement("li");
	if (e.target.className == "rock" && computer() == "paper") {
		li.appendChild(
			document.createTextNode(
				`computer chose paper. \nyou lose! Paper beats rock!`
			)
		);
		losses++;
	} else if (e.target.className == "rock" && computer() == "rock") {
		li.appendChild(document.createTextNode(`computer chose rock. \nyou tie!`));
		ties++;
	} else if (e.target.className == "rock" && computer() == "scissors") {
		li.appendChild(
			document.createTextNode(
				"computer chose scissors. \nyou win! rock beats scissors!"
			)
		);
		wins++;
	} else if (e.target.className == "paper" && computer() == "paper") {
		li.appendChild(document.createTextNode("computer chose paper. \nyou tie!"));
		ties++;
	} else if (e.target.className == "paper" && computer() == "rock") {
		li.appendChild(
			document.createTextNode(
				"computer chose rock \nyou win! Paper beats rock!"
			)
		);
		wins++;
	} else if (e.target.className == "paper" && computer() == "scissors") {
		li.appendChild(
			document.createTextNode(
				"computer chose scissors. \nyou lose! scissors beats paper!"
			)
		);
		losses++;
	} else if (e.target.className == "scissors" && computer() == "paper") {
		li.appendChild(
			document.createTextNode(
				"computer chose paper. \nyou win! scissors beats paper!"
			)
		);
		wins++;
	} else if (e.target.className == "scissors" && computer() == "rock") {
		li.appendChild(
			document.createTextNode(
				"computer chose rock \nyou lose! rock beats scissors!"
			)
		);
		losses++;
	} else if (e.target.className == "scissors" && computer() == "scissors") {
		li.appendChild(
			document.createTextNode("computer chose scissors. \nyou tie!")
		);
		ties++;
	} else {
		return;
	}
	results.appendChild(li);
	overall.textContent = `wins: ${wins} losses: ${losses} ties: ${ties}`;

	if (wins == 5) {
		if (confirm(`PLAYER WIN! ${wins} to ${losses}. Go again?`)) {
			location.reload();
		}
	} else if (losses == 5) {
		if (confirm(`COMPUTER WIN! ${losses} to ${wins}. Go again?`)) {
			location.reload();
		}
	} else {
		return;
	}
};

let wins = 0;
let losses = 0;
let ties = 0;

let buttons = document.querySelector(".buttons");
buttons.addEventListener("click", playRound);
let results = document.querySelector(".result-list");
let overall = document.querySelector(".results");
