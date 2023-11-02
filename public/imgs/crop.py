from PIL import Image

def crop_top_and_save(input_image_path, output_image_path):
    # Open the image using Pillow
    image = Image.open(input_image_path)

    # Get the dimensions of the image
    width, height = image.size

    # Define the box to crop from (left, upper, right, lower)
    box = (0, 300, width, height)

    # Crop the image
    cropped_image = image.crop(box)

    # Save the cropped image to a new file
    cropped_image.save(output_image_path)

if __name__ == "__main__":
    input_image_path = "agorafobia.jpeg"  # Change this to your input image file
    output_image_path = "agorafobiacrop.jpeg"  # Change this to your desired output file

    crop_top_and_save(input_image_path, output_image_path)
