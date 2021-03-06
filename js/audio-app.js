

	var AudioContext = window.AudioContext || window.webkitAudioContext;
	var context = new AudioContext();
	var speaker = context.destination;
	var oscillators = [];

	function play4(){
			var osc4 = context.createOscillator();
			osc4.type = 'sine';
			osc4.frequency.value = 523.25;
			var gain4 = context.createGain();
			gain4.gain.value = 0.5;
			var filter4 = context.createBiquadFilter();
			filter4.frequency.value = 1000;
			osc4.connect(gain4);
			gain4.connect(filter4);
			filter4.connect(speaker);
			//oscillators.push(osc2);
			osc4.start(0);
			gain4.gain.setValueAtTime(0.5, context.currentTime);
			gain4.gain.linearRampToValueAtTime(0, context.currentTime + 5)
			osc4.stop(context.currentTime + 5);
	};


	function play3(){
			var LFO = context.createOscillator();
			LFO.type = 'sine';
			LFO.frequency.value = 5.0;
			var osc3 = context.createOscillator();
			osc3.type = 'sine';
			osc3.frequency.value = 392;
			var gain3 = context.createGain();
			gain3.gain.value = 0.5;
			var gain31 = context.createGain();
			gain31.gain.value = 300;
			var filter3 = context.createBiquadFilter();
			filter3.frequency.value = 1000;
			osc3.connect(gain3);
			gain3.connect(filter3);
			LFO.connect(gain31);
			gain31.connect(filter3.frequency);
			filter3.connect(speaker);
			//oscillators.push(osc3);
			osc3.start(0);
			LFO.start(0);
			gain3.gain.setValueAtTime(0.5, context.currentTime);
			gain3.gain.linearRampToValueAtTime(0, context.currentTime + 5)
			osc3.stop(context.currentTime + 5);
	};

	function play2(){
			var osc2 = context.createOscillator();
			osc2.type = 'sine';
			osc2.frequency.value = 329.63;
			var gain2 = context.createGain();
			gain2.gain.value = 0.5;
			var filter2 = context.createBiquadFilter();
			filter2.frequency.value = 1000;
			osc2.connect(gain2);
			gain2.connect(filter2);
			filter2.connect(speaker);
			//oscillators.push(osc2);
			osc2.start(0);
			gain2.gain.setValueAtTime(0.5, context.currentTime);
			gain2.gain.linearRampToValueAtTime(0, context.currentTime + 5)
			osc2.stop(context.currentTime + 5);
	};


	function play1(){
			var osc1 = context.createOscillator();
			osc1.type = 'sine';
			osc1.frequency.value = 261.63;
			var gain = context.createGain();
			gain.gain.value = 0.5;
			var filter = context.createBiquadFilter();
			filter.frequency.value = 1000;
			osc1.connect(gain);
			gain.connect(filter);
			filter.connect(speaker);
			//oscillators.push(osc1);
			osc1.start(0);
			gain.gain.setValueAtTime(0.5, context.currentTime);
			gain.gain.linearRampToValueAtTime(0, context.currentTime + 5)
			osc1.stop(context.currentTime + 5);
	};

	function end(){
		for(var i = 0; i < oscillators.length; i++) {
  				var o = oscillators[i];
  				o.stop(context.currentTime + 2);
  				o.disconnect();
  		};
	};


