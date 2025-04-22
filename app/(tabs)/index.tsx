import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	ActivityIndicator,
} from "react-native";
import {
	useFonts,
	Poppins_400Regular,
	Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function Index() {
	const [name, setName] = useState("");
	const [partySize, setPartySize] = useState("");
	const [phone, setPhone] = useState("");
	const [submitted, setSubmitted] = useState(false);

	let [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_600SemiBold,
	});

	if (!fontsLoaded) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator size="large" color="#FF6B3C" />
			</View>
		);
	}

	const handleSubmit = () => {
		console.log("Form submitted:", { name, partySize, phone });
		setSubmitted(true);
	};

	return (
		<View style={styles.container}>
			{submitted ? (
				<>
					<Text style={styles.heading}>You're in! 🎉</Text>
					<Text style={styles.subtext}>
						We’ll notify you when your table is ready.
					</Text>

					<TouchableOpacity
						style={styles.button}
						onPress={() => {
							setName("");
							setPartySize("");
							setPhone("");
							setSubmitted(false);
						}}
					>
						<Text style={styles.buttonText}>Join Another Party</Text>
					</TouchableOpacity>
				</>
			) : (
				<>
					<Text style={styles.heading}>Join the Queue</Text>

					<TextInput
						style={styles.input}
						placeholder="Name"
						value={name}
						onChangeText={setName}
						placeholderTextColor="#999"
					/>
					<TextInput
						style={styles.input}
						placeholder="Party Size"
						keyboardType="numeric"
						value={partySize}
						onChangeText={setPartySize}
						placeholderTextColor="#999"
					/>
					<TextInput
						style={styles.input}
						placeholder="Phone Number"
						keyboardType="phone-pad"
						value={phone}
						onChangeText={setPhone}
						placeholderTextColor="#999"
					/>

					<TouchableOpacity style={styles.button} onPress={handleSubmit}>
						<Text style={styles.buttonText}>Join Waitlist</Text>
					</TouchableOpacity>
				</>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 24,
		marginTop: 60,
		backgroundColor: "#fefefe",
		flex: 1,
	},
	subtext: {
		fontFamily: "Poppins_400Regular",
		fontSize: 16,
		color: "#444",
		textAlign: "center",
		marginTop: 10,
		marginBottom: 30,
	},
	heading: {
		fontSize: 28,
		fontFamily: "Poppins_600SemiBold",
		color: "#FF6B3C",
		marginBottom: 30,
		textAlign: "center",
	},
	input: {
		fontFamily: "Poppins_400Regular",
		marginBottom: 18,
		padding: 14,
		borderWidth: 1,
		borderColor: "#ddd",
		borderRadius: 12,
		backgroundColor: "#fff",
		fontSize: 16,
	},
	button: {
		backgroundColor: "#FF6B3C",
		paddingVertical: 14,
		borderRadius: 12,
		alignItems: "center",
		marginTop: 10,
		shadowColor: "#000",
		shadowOpacity: 0.1,
		shadowOffset: { width: 0, height: 4 },
		shadowRadius: 6,
		elevation: 3,
	},
	buttonText: {
		fontFamily: "Poppins_600SemiBold",
		color: "#fff",
		fontSize: 18,
	},
});
