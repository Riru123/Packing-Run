require 'text2voice'

voice = TextToVoice.new("Your API key")

voice.speak("こころぴょんぴょん")
     .speaker("haruka")
     .emotion(emotion: :happiness, level: :high)

voice.save_as("test.wav")