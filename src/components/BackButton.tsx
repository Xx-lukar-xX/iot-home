import React from 'react';
import { window } from '@tauri-apps/api';

window.androidBackCallback = function () {
	// Something you have to do when back button pressed

	if(nothingToDo) return true; // which will do the default android back
	return false; // the android back will be prevented
}
