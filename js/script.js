// Elenco contatti

var app = new Vue({
	el: "#app",
	data: {
		// message: "Ciaoneeeee",
		user: {
			name: "Sara Giusti",
			avatar: "_io",
		},
		contacts: [
			{
				name: "Michele",
				avatar: "_1",
				visible: true,
				messages: [
					{
						date: "10/01/2020 15:30:55",
						message: "Hai portato a spasso il cane?",
						status: "sent",
					},
					{
						date: "10/01/2020 15:50:00",
						message: "Ricordati di dargli da mangiare",
						status: "sent",
					},
					{
						date: "10/01/2020 16:15:22",
						message: "Tutto fatto!",
						status: "received",
					},
				],
			},
			{
				name: "Fabio",
				avatar: "_2",
				visible: true,
				messages: [
					{
						date: "20/03/2020 16:30:00",
						message: "Ciao come stai?",
						status: "sent",
					},
					{
						date: "20/03/2020 16:30:55",
						message: "Bene grazie! Stasera ci vediamo?",
						status: "received",
					},
					{
						date: "20/03/2020 16:35:00",
						message: "Mi piacerebbe ma devo andare a fare la spesa.",
						status: "sent",
					},
				],
			},
			{
				name: "Samuele",
				avatar: "_3",
				visible: true,
				messages: [
					{
						date: "28/03/2020 10:10:40",
						message: "La Marianna va in campagna",
						status: "received",
					},
					{
						date: "28/03/2020 10:20:10",
						message: "Sicuro di non aver sbagliato chat?",
						status: "sent",
					},
					{
						date: "28/03/2020 16:15:22",
						message: "Ah scusa!",
						status: "received",
					},
				],
			},
			{
				name: "Luisa",
				avatar: "_4",
				visible: true,
				messages: [
					{
						date: "10/01/2020 15:30:55",
						message: "Lo sai che ha aperto una nuova pizzeria?",
						status: "sent",
					},
					{
						date: "10/01/2020 15:50:00",
						message: "Si, ma preferirei andare al cinema",
						status: "received",
					},
				],
			},
		],

		indexChat: 0,
		newMessage: "",
		autoAnswer: "ok",
		filterWord: "".trim(),
	},
	methods: {
		searchResults() {
			for (
				this.indexChat = 0;
				this.indexChat < this.contacts.length;
				this.indexChat++
			) {
				// console.log("bombaaaa");
				console.log(this.contacts[this.indexChat].name);
				// console.log(this.filterWord);
				if (this.contacts[this.indexChat].name.includes(this.filterWord)) {
					// this.contacts[this.indexChat].visible = true;
					console.log("VERO");
					console.log(this.contacts[this.indexChat].visible);
				} else {
					// this.contacts[this.indexChat].visible = false;
					console.log("FALSO");
					console.log(this.contacts[this.indexChat].visible);
				}
			}
		},
		switchChat(index) {
			console.log(index);
			this.indexChat = index;
		},
		addMessage() {
			// this.indexChat = index;
			console.log("ciao");
			console.log(this.newMessage);
			console.log(this.contacts[this.indexChat]);

			if (this.newMessage.length > 0) {
				this.contacts[this.indexChat].messages.push({
					date: "10/01/2020 15:30:55",
					message: this.newMessage,
					status: "sent",
				});
				this.newMessage = "";
				this.$refs.inputAddMessage.focus();
				setTimeout(() => {
					console.log("ciao");
					this.contacts[this.indexChat].messages.push({
						date: "10/01/2020 15:30:55",
						message: this.autoAnswer,
						status: "received",
					});
				}, 1000);
			}
		},

		// printAnswer() {
		// 	this.intervalID = setTimeout(() => {
		// 		console.log("ciao");
		// 		this.addMessage();
		// 		return this.contacts[this.indexChat].messages.push({
		// 			date: "10/01/2020 15:30:55",
		// 			message: this.autoAnswer,
		// 			status: "received",
		// 		});
		// 	}, 3000);
		// },
		// stopLoop() {
		// 	clearInterval(this.intervalID);
		// },

		// 	callFunction: function () {
		// 		var v = this;
		// 		console.log(this);
		// 		setTimeout(function () {
		// 			v.message = "Hi Bro, SetTimeout is working fine.";
		// 		}, 3000);
		// 	},
		// },
		// created() {
		// 	this.callFunction();
	},
});
