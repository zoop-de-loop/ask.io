interface Asks{
	content:string,
	isLiked:boolean,
	isAnonymous:boolean,
	userId:string
}

const asks: Record<number, Asks> = {
	0: { content: "Can a dog love me?", isLiked: false, isAnonymous: true, userId: "214194623" },
	1: { content: "Can a dog love me?", isLiked: true, isAnonymous: true, userId: "214194623" },
	2: { content: "Can a dog love me?", isLiked: false, isAnonymous: true, userId: "214194623" },
	3: { content: "Can a dog love me?", isLiked: false, isAnonymous: true, userId: "214194623" },
	4: { content: "Can a dog love me?", isLiked: true, isAnonymous: true, userId: "214194623" },
	5: { content: "Can a dog love me?", isLiked: false, isAnonymous: true, userId: "214194623" },
	6: { content: "Can a dog love me?", isLiked: true, isAnonymous: false, userId: "321854554" },
	7: { content: "Can a dog love me?", isLiked: false, isAnonymous: true, userId: "321854554" },
	8: { content: "Can a dog love me?", isLiked: false, isAnonymous: true, userId: "321854554" },
	9: { content: "Can a dog love me?", isLiked: false, isAnonymous: false, userId: "214194623" },
	10: { content: "Can a dog love me?", isLiked: false, isAnonymous: true, userId: "214194623" },
	11: { content: "Can a dog love me?", isLiked: false, isAnonymous: true, userId: "214194623" },
	12: { content: "Can a dog love me?", isLiked: false, isAnonymous: true, userId: "214194623" },
	13: { content: "Can a dog love me?", isLiked: false, isAnonymous: true, userId: "214194623" },
	14: { content: "Can a dog love me?", isLiked: false, isAnonymous: true, userId: "214194623" },
	15: { content: "Can a dog love me?", isLiked: false, isAnonymous: true, userId: "214194623" },
	16: { content: "Can a dog love me?", isLiked: false, isAnonymous: true, userId: "214194623" },
	17: { content: "Can a dog love me?", isLiked: false, isAnonymous: true, userId: "214194623" },
	18: { content: "Can a dog love me?", isLiked: false, isAnonymous: true, userId: "214194623" },
	19: { content: "Can a dog love me?", isLiked: false, isAnonymous: true, userId: "214194623" },
	20: { content: "Can a dog love me?", isLiked: false, isAnonymous: true, userId: "214194623" },
	21: { content: "Can a dog love me?", isLiked: false, isAnonymous: true, userId: "321854554" },
	22: { content: "Can a dog love me?", isLiked: false, isAnonymous: true, userId: "321854554" },
	23: { content: "Can a dog love me?", isLiked: false, isAnonymous: true, userId: "321854554" },
	24: { content: "Can a dog love me?", isLiked: false, isAnonymous: true, userId: "321854554" },
	25: { content: "Can a dog love me?", isLiked: false, isAnonymous: true, userId: "321854554" },
};

export default asks;
