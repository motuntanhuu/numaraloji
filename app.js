import java.util.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

public class NumerologyAnalyzer {

    public static int calculateNumerology(String name) {
        name = name.toUpperCase();
        Map<Character, Integer> numerologyMap = new HashMap<>();
        numerologyMap.put('A', 1);
        numerologyMap.put('B', 2);
        numerologyMap.put('C', 3);
        numerologyMap.put('D', 4);
        numerologyMap.put('E', 5);
        numerologyMap.put('F', 6);
        numerologyMap.put('G', 7);
        numerologyMap.put('H', 8);
        numerologyMap.put('I', 9);
        numerologyMap.put('J', 1);
        numerologyMap.put('K', 2);
        numerologyMap.put('L', 3);
        numerologyMap.put('M', 4);
        numerologyMap.put('N', 5);
        numerologyMap.put('O', 6);
        numerologyMap.put('P', 7);
        numerologyMap.put('Q', 8);
        numerologyMap.put('R', 9);
        numerologyMap.put('S', 1);
        numerologyMap.put('T', 2);
        numerologyMap.put('U', 3);
        numerologyMap.put('V', 4);
        numerologyMap.put('W', 5);
        numerologyMap.put('X', 6);
        numerologyMap.put('Y', 7);
        numerologyMap.put('Z', 8);

        int total = 0;
        for (char c : name.toCharArray()) {
            if (Character.isLetter(c)) {
                total += numerologyMap.getOrDefault(c, 0);
            }
        }

        while (total > 9 && total != 11 && total != 22 && total != 33) {
            int sum = 0;
            int num = total;
            while (num > 0) {
                sum += num % 10;
                num /= 10;
            }
            total = sum;
        }
        return total;
    }

    public static String getZodiacSign(int day, int month) {
        int[] cutoffs = {120, 219, 320, 420, 521, 621, 722, 823, 923, 1023, 1122, 1222, 1231};
        String[] signs = {"Oðlak", "Kova", "Balýk", "Koç", "Boða", "Ýkizler", "Yengeç", "Aslan", "Baþak", "Terazi", "Akrep", "Yay", "Oðlak"};
        
        int dateNumber = month * 100 + day;
        for (int i = 0; i < cutoffs.length; i++) {
            if (dateNumber <= cutoffs[i]) {
                return signs[i];
            }
        }
        return "Oðlak";
    }

    public static Map.Entry<String, Integer> getPlanetAndLuckyNumber(String zodiac) {
        Map<String, Map.Entry<String, Integer>> zodiacData = new HashMap<>();
        zodiacData.put("Koç", new AbstractMap.SimpleEntry<>("Mars", 9));
        zodiacData.put("Boða", new AbstractMap.SimpleEntry<>("Venüs", 6));
        zodiacData.put("Ýkizler", new AbstractMap.SimpleEntry<>("Merkür", 5));
        zodiacData.put("Yengeç", new AbstractMap.SimpleEntry<>("Ay", 2));
        zodiacData.put("Aslan", new AbstractMap.SimpleEntry<>("Güneþ", 1));
        zodiacData.put("Baþak", new AbstractMap.SimpleEntry<>("Merkür", 5));
        zodiacData.put("Terazi", new AbstractMap.SimpleEntry<>("Venüs", 6));
        zodiacData.put("Akrep", new AbstractMap.SimpleEntry<>("Mars", 9));
        zodiacData.put("Yay", new AbstractMap.SimpleEntry<>("Jüpiter", 3));
        zodiacData.put("Oðlak", new AbstractMap.SimpleEntry<>("Satürn", 8));
        zodiacData.put("Kova", new AbstractMap.SimpleEntry<>("Uranüs", 4));
        zodiacData.put("Balýk", new AbstractMap.SimpleEntry<>("Neptün", 7));

        return zodiacData.getOrDefault(zodiac, new AbstractMap.SimpleEntry<>("Bilinmiyor", 0));
    }

    public static List<String> suggestNaturalStones(int numerology, String zodiac) {
        Map<Integer, List<String>> stoneData = new HashMap<>();
        stoneData.put(1, Arrays.asList("Elmas", "Yakut", "Kuvars"));
        stoneData.put(2, Arrays.asList("Ay Taþý", "Ýnci", "Akuamarin"));
        stoneData.put(3, Arrays.asList("Ametist", "Turmalin", "Topaz"));
        stoneData.put(4, Arrays.asList("Kehribar", "Yeþim", "Obsidyen"));
        stoneData.put(5, Arrays.asList("Turkuaz", "Akik", "Sitrin"));
        stoneData.put(6, Arrays.asList("Safir", "Zümrüt", "Kuvars"));
        stoneData.put(7, Arrays.asList("Kiyanit", "Lapis Lazuli", "Florit"));
        stoneData.put(8, Arrays.asList("Oniks", "Kaplan Gözü", "Hematit"));
        stoneData.put(9, Arrays.asList("Yakut", "Granat", "Rodonit"));

        Map<String, String> zodiacStones = new HashMap<>();
        zodiacStones.put("Koç", "Yakut");
        zodiacStones.put("Boða", "Zümrüt");
        zodiacStones.put("Ýkizler", "Akik");
        zodiacStones.put("Yengeç", "Ay Taþý");
        zodiacStones.put("Aslan", "Elmas");
        zodiacStones.put("Baþak", "Sitrin");
        zodiacStones.put("Terazi", "Safir");
        zodiacStones.put("Akrep", "Topaz");
        zodiacStones.put("Yay", "Turkuaz");
        zodiacStones.put("Oðlak", "Oniks");
        zodiacStones.put("Kova", "Akuamarin");
        zodiacStones.put("Balýk", "Ametist");

        List<String> stones = new ArrayList<>(stoneData.getOrDefault(numerology, new ArrayList<>()));
        String zodiacStone = zodiacStones.getOrDefault(zodiac, "");
        if (!zodiacStone.isEmpty() && !stones.contains(zodiacStone)) {
            stones.add(zodiacStone);
        }
        return stones.subList(0, Math.min(stones.size(), 3));
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Doðal Taþ ve Numeroloji Analizine Hoþ Geldiniz!");
        System.out.print("Adýnýzý girin: ");
        String name = scanner.nextLine().trim();
        System.out.print("Soyadýnýzý girin: ");
        String surname = scanner.nextLine().trim();
        System.out.print("Doðum tarihinizi (GG/AA/YYYY) formatýnda girin: ");
        String birthDateInput = scanner.nextLine().trim();

        try {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
            LocalDate birthDate = LocalDate.parse(birthDateInput, formatter);
            int day = birthDate.getDayOfMonth();
            int month = birthDate.getMonthValue();

            String fullName = name + " " + surname;
            int numerologyNumber = calculateNumerology(fullName);
            String zodiacSign = getZodiacSign(day, month);
            Map.Entry<String, Integer> planetAndLucky = getPlanetAndLuckyNumber(zodiacSign);
            String planet = planetAndLucky.getKey();
            int luckyNumber = planetAndLucky.getValue();
            List<String> stones = suggestNaturalStones(numerologyNumber, zodiacSign);

            System.out.println("\nAnaliz Sonuçlarý:");
            System.out.println("Ad Soyad: " + fullName);
            System.out.println("Doðum Tarihi: " + birthDateInput);
            System.out.println("Burcunuz: " + zodiacSign);
            System.out.println("Ýsim Numeroloji Sayýsý: " + numerologyNumber);
            System.out.println("Uðurlu Sayý: " + luckyNumber);
            System.out.println("Gezegen: " + planet);
            System.out.println("Önerilen Doðal Taþlar: " + String.join(", ", stones));

        } catch (DateTimeParseException e) {
            System.out.println("Lütfen geçerli bir doðum tarihi formatý girin (GG/AA/YYYY).");
        }
        scanner.close();
    }
}