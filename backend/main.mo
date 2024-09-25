import Bool "mo:base/Bool";
import Nat8 "mo:base/Nat8";

import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Blob "mo:base/Blob";
import Array "mo:base/Array";
import Iter "mo:base/Iter";
import Option "mo:base/Option";
import Debug "mo:base/Debug";

actor {
    stable var users : [(Text, Blob)] = [];

    public func login(email: Text, password: Text) : async Bool {
        // Encrypt the password before storing or comparing
        let encryptedPassword = encryptPassword(password);

        // Check if the user exists and the password matches
        for ((storedEmail, storedPassword) in users.vals()) {
            if (storedEmail == email and storedPassword == encryptedPassword) {
                return true;
            }
        };
        return false;
    };

    public func register(email: Text, password: Text) : async Bool {
        // Encrypt the password before storing
        let encryptedPassword = encryptPassword(password);

        // Check if the user already exists
        for ((storedEmail, _) in users.vals()) {
            if (storedEmail == email) {
                return false; // User already exists
            }
        };

        // Add the new user
        users := Array.append(users, [(email, encryptedPassword)]);
        return true;
    };

    private func encryptPassword(password: Text) : Blob {
        // Simple encryption for demonstration purposes
        // In a real application, use a proper encryption library
        return Blob.fromArray(Array.map(Blob.toArray(Text.encodeUtf8(password)), func (c: Nat8) : Nat8 { return c + 1; }));
    };
}
