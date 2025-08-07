import { ImageSourcePropType, View } from "react-native";
import { Image } from 'expo-image';

type Props = {
    imageSize: number;
    stickerSource: ImageSourcePropType;
};

export default function EmojiSticker({ })