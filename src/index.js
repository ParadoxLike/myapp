import React from 'react';
import ReactDOM from 'react-dom';
import connect from "@vkontakte/vk-bridge";
import App from './App';

import "@vkontakte/vkui/dist/vkui.css";

// Init VK  Mini App
connect.send("VKWebAppInit");
const schemeAttribute = document.createAttribute("scheme");
schemeAttribute.value = "space_gray";
schemeAttribute.value = "bright_light";
document.body.attributes.setNamedItem(schemeAttribute);

/*
connect.subscribe(({ detail: { type, data }}) => {
	if (type === "VKWebAppUpdateConfig") {
		const schemeAttribute = document.createAttribute("scheme");
		schemeAttribute.value = data.scheme ? data.scheme : "bright_light";
		document.body.attributes.setNamedItem(schemeAttribute);
	}
});
*/
ReactDOM.render(<App />, document.getElementById('root'));

