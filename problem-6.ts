{
    // 
    interface Profile {
        name: string;
        age: number;
        email: string;
    };

    function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
        return { ...profile, ...updates };
      }


    const myProfile: Profile = { name: "Atik", age: 24, email: "atik@gamil.com"};

    console.log(updateProfile(myProfile, { age: 25}));
    
} 

