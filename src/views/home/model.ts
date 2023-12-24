type HomeModel = {
  state: {
    cpf: string;
  };
  methods: {
    generateCpf: () => void;
    copyToClipBoard: () => void;
  };
};

export type { HomeModel };
