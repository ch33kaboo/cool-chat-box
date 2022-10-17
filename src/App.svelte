<script>
	import { afterUpdate } from 'svelte'
	import { allMessages } from './stores/messagesStore.js'
	import ChatBubble from "./lib/ChatBubble.svelte"

	let myDiv

	// wantEdit object let us know if user want to send a new message or edit an existing one, because in both cases the message comes from one input & we cannot tell.
	// also I had to pass the userId with it to know which input to focus, obv in real life app these two input would be in two different machines
	let wantEdit = {
		wantEdit : false,
		userId : null
	}

	let wantScroll = true

	let deleteMessage = (msgid) => {
		messages = messages.filter(item => msgid != item.msgid)
		messages = [...messages, {
			user : -1 , // -1 tells ChatBubble component not to render this message, we cant simply delete from the array because we will have duplicate keys for our each loop later
			msgid : msgid
		}]
		wantScroll = false
	}

	let foundIndex
	let editMessage = (msgid, user) => {
		foundIndex = messages.findIndex(item => item.msgid == msgid);

		wantEdit.wantEdit = true
		let myInput 
		user == 1 ? myInput = document.getElementById("1") : myInput = document.getElementById("2")
		myInput.focus()
		myInput.placeholder = "enter edited message here"
		wantScroll = false
	}

	// scroll down each time a user send a message
	afterUpdate(() => {
		if (!wantScroll) {
			wantScroll = true
			return
		}
		myDiv.scrollTo(0, myDiv.scrollHeight)
	})

	let messages = []

	// the store here is useless since there is only one component using it, but you certainly need it on a larger app
	allMessages.subscribe((data) => {
		messages = data
	})

	let handleInputChange = (e) => {
		if (e.key == 'Enter') {
			send(e)
		}
	}

	let send = (e) => {
		e.target.value = e.target.value.replace(/\s+/g, ' ').trim()
		if (e.target.value == "") {return} //if user didn't write a message, just a sequence of spaces or an empty message

		if (wantEdit.wantEdit) {
			messages[foundIndex].msg = e.target.value;
			wantEdit.wantEdit = false

			let myInput = e.target
			myInput.blur()
			myInput.placeholder = ""
		} else {
			messages = [...messages, {
				user : e.target.id ,
				msg : e.target.value,
				msgid : messages.length
			}]
		}

		e.target.value = ""
	}
</script>

<main class="h-screen overflow-hidden flex flex-col gap-2 justify-center items-center bg-slate-800">
	<div class="relative h-1/3 w-1/2">
		<div class="bg-gradient-to-tr from-amber-400 to-pink-500 -inset-4 absolute blur-xl opacity-70">
		</div>
		<div bind:this={myDiv} class="bg-slate-800 inset-0 absolute rounded-lg p-2 overflow-y-scroll overflow-x-hidden flex flex-col items-center justify-start gap-1">
			{#each messages as message (message.msgid)}
			<ChatBubble {message} on:deleteMessage={() => deleteMessage(message.msgid)} on:editMessage={() => editMessage(message.msgid, message.user)} />
			{:else}
			<div class="h-full self-center flex items-center text-center">
				the two users never talked to each other !!
			</div>
			{/each}
		</div>
	</div>
	<div class="mt-16 flex self-stretch items-center justify-around">
		<div class="flex flex-col items-center justify-center gap-1">
			<!-- second person -->
			<p>first person write msg here!!</p>
			<input id="1" on:keydown={(e) => handleInputChange(e)} type="text" class="rounded-lg px-2 py-1 text-black">
		</div>
		<div class="flex flex-col items-center justify-center gap-1">
			<!-- first person -->
			<p>second person write msg here!!</p>
			<input id="2" on:keydown={(e) => handleInputChange(e)} type="text" class="rounded-lg px-2 py-1 text-black">
		</div>
	</div>
</main>
