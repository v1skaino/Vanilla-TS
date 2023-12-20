type HomeModel = {
  state: {
    user: {
      name: string;
      email: string;
    };
  };
  methods: {
    updateUserName: () => void;
  };
};

export type { HomeModel };
